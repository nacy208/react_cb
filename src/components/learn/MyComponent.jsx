//jsx = js + xml (html)
//fragment <></>
//jsx : 1 parent

//boolean null undefined => ko in ra UI(gia tri)

import './style.css';

const MyComponent = () => {
    //const olivia = 'olivia 11';
    // const olivia = true;
    // const olivia = 25;
    // const olivia = undefined;
    // const olivia = null;
    // const olivia = ['olivia', 'react', 'js'];
    const olivia = {
        name: 'olivia',
        age: 25,
        address: 'hn'
    };
    return (
        <>
            <div className='my-component'>
                {olivia.name} & react
            </div>
            <div>{console.log("olivia13")}</div>
            <div className="child"
                style={{ borderRadius: '20px', backgroundColor: 'yellow' }}
            >child</div>
        </>
    );
}
//{JSON.stringify(olivia)} DE HIEN THI OBJECT(ARRAY) RA UI
//default export 1 per file
//named export multiple per file
export default MyComponent;