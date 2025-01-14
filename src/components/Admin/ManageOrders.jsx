import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOrders, pendingOrder,passOrder, rejectOrder } from '../../redux/Admin/actions';
import {Table,Thead,Tbody,Tr,Th,Td,TableContainer,Heading,IconButton,useToast,Image,CircularProgress} from '@chakra-ui/react'
import { FiClock,FiTruck,FiXOctagon } from 'react-icons/fi';
import {v4} from 'uuid'
import {theme} from '@chakra-ui/react';

const ManageOrders = () => {
  const {isLoadingOrders,isErrorOrders,orders}=useSelector(state=>state.AdminReducer);
  const dispatch=useDispatch();
  useEffect(()=>{
     dispatch(getOrders)
  },[]);

  const getButtonColor = (status) => {
    switch (status) {
      case "Delayed":
        return theme.colors.blue[900]
      case "Passed":
        return theme.colors.green[900]
      case "Rejected":
        return theme.colors.red[900]
      default:
        return ""
    }
  }
  
  return (
    <div>
      <Heading size='md'>Manage Orders</Heading>
      {isLoadingOrders && <CircularProgress isIndeterminate color='green.300' />}
      {isErrorOrders && <h2>Error Occured while getting Orders</h2>}
        <div>
          {orders.length > 0 && 
          <TableContainer width={'auto'}>
          <Table variant='striped' colorScheme='teal' size={'sm'}>
            <Thead>
              <Tr>
                <Th>Photo</Th>
                <Th>Name</Th>
                <Th>Category</Th>
                <Th>User Name</Th>
                <Th>User Email</Th>
                <Th>Delay</Th>
                <Th>Pass</Th>
                <Th>Reject</Th>
              </Tr>
            </Thead>
            <Tbody>
              {orders.map((order)=>{
                const buttonColor = getButtonColor(order.status);
                // console.log('buttonColor',buttonColor)
                let colorProp='',one='',two='',three='';
                // order.status==='Delayed'?one=theme.colors.blue[900]:order.status==='Passed'?two='green':order.status==='Rejected'?three=theme.colors.red[900]:colorProp="";
                order.status==='Delayed'?one='blue[900]':order.status==='Passed'?two='green':order.status==='Rejected'?three='red':colorProp="";
                return(
                <Tr key={order.userId+order.id+v4()}>
                <Td><Image src={order.img} alt={order.description} boxSize='90px' borderRadius='full' /></Td>
                <Td>{order.brand}</Td>
                <Td>{order.category}</Td>
                <Td>{order.username}</Td>
                <Td>{order.useremail}</Td>
                <Td><IconButton aria-label='Delay order' onClick={()=>dispatch(pendingOrder(order.id))} style={{color:one}} color={one} icon={<FiClock/>}/></Td>
                <Td><IconButton aria-label='Pass order' onClick={()=>dispatch(passOrder(order.id))} color={two} icon={<FiTruck/>}/></Td>
                <Td><IconButton aria-label='Reject order' onClick={()=>dispatch(rejectOrder(order.id))} color={three} icon={<FiXOctagon/>}/></Td>
              </Tr>
                )})
              }
            </Tbody>
          </Table>
        </TableContainer>
          }
        </div>
    </div>
  )
}

export default ManageOrders