import './table.css';
import DataTable, { createTheme } from 'react-data-table-component';
import getID from './../../utils/getID';
import { GetMeal } from './../../utils/getMeal';


export const Table = () => {
    let broswer = window;
    let id = getID(broswer);
    const mealDescription = GetMeal(id);

    const datosTabla = [
        {id:1,  Ingrediente: `${mealDescription[0]?.strIngredient1}`, measure:`${mealDescription[0]?.strMeasure1}`},
        {id:2,  Ingrediente: `${mealDescription[0]?.strIngredient2}`, measure:`${mealDescription[0]?.strMeasure2}`},        
        {id:3,  Ingrediente: `${mealDescription[0]?.strIngredient3}`, measure:`${mealDescription[0]?.strMeasure3}`},
        {id:4,  Ingrediente: `${mealDescription[0]?.strIngredient4}`, measure:`${mealDescription[0]?.strMeasure4}`},         
        {id:5,  Ingrediente: `${mealDescription[0]?.strIngredient5}`, measure:`${mealDescription[0]?.strMeasure5}`},
        {id:6,  Ingrediente: `${mealDescription[0]?.strIngredient6}`, measure:`${mealDescription[0]?.strMeasure6}`},
        {id:7,  Ingrediente: `${mealDescription[0]?.strIngredient7}`, measure:`${mealDescription[0]?.strMeasure7}`},         
        {id:8,  Ingrediente: `${mealDescription[0]?.strIngredient8}`, measure:`${mealDescription[0]?.strMeasure8}`},
        {id:9,  Ingrediente: `${mealDescription[0]?.strIngredient9}`, measure:`${mealDescription[0]?.strMeasure9}`},
        {id:10, Ingrediente: `${mealDescription[0]?.strIngredient10}`, measure:`${mealDescription[0]?.strMeasure10}`},
        {id:11, Ingrediente: `${mealDescription[0]?.strIngredient11}`, measure:`${mealDescription[0]?.strMeasure11}`},
        {id:12, Ingrediente: `${mealDescription[0]?.strIngredient12}`, measure:`${mealDescription[0]?.strMeasure12}`},
        {id:13, Ingrediente: `${mealDescription[0]?.strIngredient13}`, measure:`${mealDescription[0]?.strMeasure13}`},
        {id:14, Ingrediente: `${mealDescription[0]?.strIngredient14}`, measure:`${mealDescription[0]?.strMeasure14}`},
        {id:15, Ingrediente: `${mealDescription[0]?.strIngredient15}`, measure:`${mealDescription[0]?.strMeasure15}`},
        {id:16, Ingrediente: `${mealDescription[0]?.strIngredient16}`, measure:`${mealDescription[0]?.strMeasure16}`},
        {id:17, Ingrediente: `${mealDescription[0]?.strIngredient17}`, measure:`${mealDescription[0]?.strMeasure17}`},
        {id:18, Ingrediente: `${mealDescription[0]?.strIngredient18}`, measure:`${mealDescription[0]?.strMeasure18}`},
        {id:19, Ingrediente: `${mealDescription[0]?.strIngredient19}`, measure:`${mealDescription[0]?.strMeasure19}`},
        {id:20, Ingrediente: `${mealDescription[0]?.strIngredient20}`, measure:`${mealDescription[0]?.strMeasure20}`},
    ]  
    
    const ownColumns = [ 
        {   name: 'ID',
            selector: 'id',
            sorteable: true
        },
        {
            name: 'INGREDIENT',
            selector: 'Ingrediente',
            sorteable: true
        },
        {
            name: 'MEASURE',
            selector: 'measure',
            sorteable: true
        }
    ];

    createTheme('solarized', {
        text: {
          primary: '#268bd2',
          secondary: '#2aa198',
        },
        background: {
          default: '#002b36',
        },
        context: {
          background: '#cb4b16',
          text: '#FFFFFF',
        },
        divider: {
          default: '#073642',
        },
        action: {
          button: 'rgba(0,0,0,.54)',
          hover: 'rgba(0,0,0,.08)',
          disabled: 'rgba(0,0,0,.12)',
        },
      });

      const customStyles = {
        rows: {
          style: {
            minHeight: '72px', // override the row height
          }
        },
        headCells: {
          style: {
            paddingLeft: '8px', // override the cell padding for head cells
            paddingRight: '8px',
          },
        },
        cells: {
          style: {
            paddingLeft: '8px', // override the cell padding for data cells
            paddingRight: '8px',
          },
        },
      };

    return (
        <section className='table'>
            <DataTable columns={ownColumns} title='LIST' data={datosTabla}  pagination fixedHeader  />
        </section>
    )

}