// components/Menu.tsx
import { Button } from '@mui/material';
import Link from 'next/link';


const AdminItem= () => {
 

  return (
    <div>
            <Button>
                <Link href={'/admin/admin-login'}>
                    <div  className="
            p-3
            flex
            flex-row
            items-center
            gap-2
            rounded-md
            cursor-pointer
            hover:bg-green-500
            hover:text-white
            transition
            text-green-600
          ">
                        <img src={"https://i.ibb.co/Pcj1wHJ/icons8-administrator-male-94.png"} width={30} height={30}  alt="admin" />
                    </div>
                </Link>
            </Button>
    </div>
    
  );
};

export default AdminItem;
