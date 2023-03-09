import logo from '../Navbar/logo-uk.png'


export const Footer = () => {

    return ( 
        <div>
            <footer className='text-white py-4 bg-dark'>
                <div className="container m-5" >
                    <img src={logo} alt="Logo" className="rounded mx-auto d-block" height={60} />
                    <p className="text-center m-2">Urban Kvinde</p>
                    <p className="h6 text-center m-5">
                        &copy; 2023 | Hecho con ♥️ by Urban Kvinde
                    </p>
                </div>
            </footer>
        </div>
    );
}

