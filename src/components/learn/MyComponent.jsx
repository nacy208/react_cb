//jsx = js + xml (html)
//fragment <></>
//jsx : 1 parent

import './style.css';

const MyComponent = () => {
    return (
        <>
            <div className='my-component'>
                olivia & react
            </div>
            <div className="child"
                style={{ borderRadius: '20px', backgroundColor: 'yellow' }}
            >child</div>
        </>
    );
}
//default export 1 per file
//named export multiple per file
export default MyComponent;