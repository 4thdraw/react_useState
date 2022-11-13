/*eslint-disable*/
import {useState} from 'react';



const App = () => {
  
  const [ viewType, viewTypeUpdate ] = useState('symple');
  const proinfo = [
    './product/project_1.jpg',
    './product/project_2.jpg',
    './product/project_3.jpg',
    './product/project_4.jpg',
    './product/project_5.jpg',
    './product/project_6.jpg',
    './product/project_7.jpg',
    './product/project_8.jpg',
    './product/project_9.jpg',
    './product/project_10.jpg'
  ];
 
  
  return (
    <>
    <div id="productWrap" className={`py-5  container  ${ viewType }`}>
      <div className="d-flex justify-content-between align-items-center">
        <h2>베스트상품</h2>
        <div className="btns">
          <button  className='btn border-bottom rounded-0 fs-5 px-0 mx-2 list' onClick={ e => { viewTypeUpdate('list');} }>리스트형</button>
          <button  className='btn border-bottom rounded-0 fs-5 px-0 mx-2 symple' onClick={ e => { viewTypeUpdate('symple');} }>갤러리심플</button>
          <button  className='btn border-bottom rounded-0 fs-5  px-0 mx-2 multi' onClick={ e => { viewTypeUpdate('multi');} }>갤러리디테일</button>         
        </div>
      </div>
      <div className="prd_list pt-5">
            <ul className={ `d-flex flex-wrap justify-content-center ` } >
               {
                proinfo.map(( item, index )=>{
                  return <li><img src={item} key={index} /></li>
                })
               }
            </ul>        
      </div>      
    </div>    
    </>
  );
}

export default App;
