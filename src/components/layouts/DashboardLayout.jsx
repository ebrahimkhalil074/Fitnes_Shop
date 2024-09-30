import { Button } from "antd";
import { Link, Outlet } from "react-router-dom";


const DashboardLayout = () => {
    return (
        <div className='relative min-h-screen md:flex'>
          
      {/* Sidebar Component */}
  <div className=" bg-slate-500">
   <div className=" grid grid-cols-1 gap-3">
    <div className='text-white text-2xl'>Fitness Shop</div>
    <Button>  <Link to='product-management'> Product Management</Link></Button>
  <Button><Link to='create-category'> Add Category</Link>
  </Button>
    
   </div>
  </div>
      <div className='flex-1 '>
        <div className='p-5 '>{/* Outlet for dynamic contents */}
        <Outlet/>
        
        </div>
      </div>
    </div>
    );
};

export default DashboardLayout;