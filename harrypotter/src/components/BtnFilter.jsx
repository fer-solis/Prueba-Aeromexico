import { Button } from 'react-bootstrap';

const BtnFilter = ({handleView}) => {
    
    return (  
        <div className='btnFilter'>
            <Button className='btnPurple' variant="primary" onClick={()=>handleView('viewStudent')}>ESTUDIANTES</Button>{' '}
            <Button variant="primary" onClick={()=>handleView('viewStaff')}>STAFF</Button>{' '}
        </div>
        
    );
}
 
export default BtnFilter;
