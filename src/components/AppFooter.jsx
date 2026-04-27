export default function AppFooter() {


    return (
        <footer className=" bg-dark mt-3">
            <div className="container">
                <div className="row ">
                    <div className="col-lg-6 mt-3">
                        <h1 className="text-info">MovieRev <i className="bi bi-camera-reels-fill text-white fs-2"></i></h1>
                        <p className="text-white">Copyright &copy; 2024 MovieRev. All rights reserved.</p>
                        <p className="text-white">This is a community blog, don't take any review personal,everyone can and will say their personal opinion.</p>
                    </div>

                    <div className="col-lg-5 d-flex  mt-3 justify-content-lg-end">
                        <ul className="list-unstyled text-white"> <span className="fs-3">Issues:</span>
                            <li><a href="#">Common issues</a></li>
                            <li><a href="#">Troubleshooting</a></li>
                            <li><a href="#">Uploading problems</a></li>
                            <li><a href="#">Reviews problems</a></li>
                            <li><a href="#">FAQ</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}