/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Modal, Pagination, Table, TableProps } from 'antd';
import { useState } from 'react';
import { TQueryParams } from '../types/globalTypes';
import { useAddProductMutation, useDeleteProductMutation, useGetAllCategoryQuery, useGetAllProductsQuery } from '../redux/api/allapi';
import React from 'react';
import { toast } from 'sonner';
import UpdateServiceModal from '../components/modal/UpdateServicesModal';
import { SubmitHandler, FieldValues } from 'react-hook-form';
import PhForm from '../form/PhForm';
import PhInput from '../form/PhInput';
import PhSelect from '../form/PhSelect';

// Define the type for the service record
export type TProduct ={
    _id: string,
    name: string,
    price: number,
    description: string,
    image: string,
    category:string,
    stock:number,
}

const ProductsManagement: React.FC = () => {
  const [selectedService, setSelectedService] = useState<TProduct | null>(null);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [params, setParams] = useState<TQueryParams[]>([]);
  const [page, setPage] = useState(1);

  const [deleteService] = useDeleteProductMutation();
  const { data: productsData } = useGetAllProductsQuery([
    { name: 'page', value: page },
    { name: 'sort', value: 'price' },
    ...params,
  ]);
console.log(productsData)
  const metaData = productsData?.data?.meta;
  const tableData: TProduct[] = productsData?.data?.result.map(
    ({ _id, name, category, price, stock }:any) => ({
       _id,
      name,
      category,
      price,
      stock,
    })
  ) || [];

  const columns = [
    {
      title: 'Name',
      key: 'name',
      dataIndex: 'name',
    },
    {
      title: 'Price',
      key: 'price',
      dataIndex: 'price',
    },
    {
      title: 'Category',
      key: 'category',
      dataIndex: 'category',
    },
    {
      title: 'Stock',
      key: 'stock',
      dataIndex: 'stock',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: any, record: TProduct) => (
        <div>
          <Button onClick={() => handleUpdate(record)}>Update</Button>
        </div>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_: any, record: TProduct) => (
        <div>
          <Button danger onClick={() => showDeleteConfirm(record._id)}>Delete</Button>
        </div>
      ),
    },
  ];

  const handleUpdate = (service: TProduct) => {
    setSelectedService(service);  // Set the service to update
    setIsUpdateModalOpen(true);   // Open the update modal
  };

  const showDeleteConfirm = (id: string) => {
    Modal.confirm({
      title: 'Are you sure you want to delete this service?',
      content: 'This action cannot be undone.',
      okText: 'Confirm',
      okType: 'danger',
      cancelText: 'Cancel',
      onOk() {
        handleDelete(id);
      },
    });
  };

  const handleDelete = async (id: string) => {
    try {
      const res = await deleteService(id).unwrap();
      if (res.success) {
        toast.success('product deleted successfully');
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error('Failed to delete product');
    }
  };

  const onChange: TableProps<TProduct>['onChange'] = (
    _pagination,
    filters,
    _sorter,
    extra
  ) => {
    if (extra.action === 'filter') {
      const queryParams: TQueryParams[] = [];
      filters.name?.forEach((item) =>
        queryParams.push({ name: 'name', value: item })
      );
      setParams(queryParams);
    }
  };

  return (
    <div>
      <div>
        <AddServiceModal />
      </div>

      <Table
        columns={columns}
        dataSource={tableData}
        onChange={onChange}
        pagination={false}
      />

      <Pagination
        current={page}
        onChange={(value) => setPage(value)}
        pageSize={metaData?.limit}
        total={metaData?.total}
      />

      {isUpdateModalOpen && (
        <UpdateServiceModal
          service={selectedService}
          isVisible={isUpdateModalOpen}
          onClose={() => setIsUpdateModalOpen(false)}
        />
      )}
    </div>
  );
};

// AddServiceModal component with TypeScript


const AddServiceModal: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addService,] = useAddProductMutation();
  const {data} = useGetAllCategoryQuery(undefined)
const categoryData= data?.data
console.log(categoryData)
const categoryOptions = categoryData?.map((category) => ({
  value: category._id,
  label: category.name,
}));
console.log(categoryOptions)
  const handleSubmit : SubmitHandler<FieldValues>= async (data) => {
    const toastId = toast.loading('Creating...');
    const serviceData = {
      name: data.name,
      category:data.category,
      price: Number(data.price),
      stock: Number(data.stock),
      image: data.image,
      description: data.description,
      
    };

    try {
      const res = await addService(serviceData);
      if ((res.error) ) {
        toast.error('PRODUCT CREATION FAILED', { id: toastId });
      } else {
        toast.success(res.data?.message, { id: toastId });
      }
    } catch (err) {
      toast.error(`Something went wrong: ${err}`, { id: toastId });
    }
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };


  return (
    <>
      <Button onClick={showModal}>Add Product</Button>
      <Modal
        title="Add New Service"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <PhForm onSubmit={handleSubmit}>
          <PhInput type="text" name="name" label="Name" />
          <PhSelect
          label="Category"
          name="category"
          options={categoryOptions}
        />
          <PhInput type="number" name="price" label="Price" />
          <PhInput type="text" name="description" label="Description" />
          <PhInput type="number" name="stock" label="Stock" />
          <Button onClick={handleCancel} htmlType="submit">Submit</Button>
        </PhForm>
      </Modal>
    </>
  );
};

export default ProductsManagement;
