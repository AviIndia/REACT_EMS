import { useContext, useState, useEffect } from "react"

import { EmployeeContext } from "../context/EmployeeProvider";

const Address = () => {

    const { emp } = useContext(EmployeeContext);
    const [search, setSearch] = useState("")
    const [filteredData, setFilteredData] = useState([]);
    useEffect(() => {
        setFilteredData(emp);
    }, [emp]);

    const handleSearch = (arg) => {
        setSearch(arg);

        if (arg.length === 0) {
            setFilteredData(emp); // reset
            return;
        }

        const res = emp.filter((item) =>
            item.name.toLowerCase().includes(arg.toLowerCase())
        );

        setFilteredData(res);
    };

    //pagination
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 5;
    const lastIndex = currentPage * recordsPerPage;
        const firstIndex = lastIndex - recordsPerPage;

        const currentRecords = filteredData.slice(firstIndex, lastIndex);

    const totalPages = Math.ceil(filteredData.length / recordsPerPage);
    const nextPage = () => {
  if (currentPage < totalPages) {
    setCurrentPage(prev => prev + 1);
  }
};

const prevPage = () => {
  if (currentPage > 1) {
    setCurrentPage(prev => prev - 1);
  }
};

const goToPage = (page) => {
  setCurrentPage(page);
};

    return (
        <main>
            <div className="container-fluid px-4">
                <h1 className="mt-4">Employee Address</h1>
                <ol className="breadcrumb mb-4">
                    <li className="breadcrumb-item active">Employee Address</li>
                </ol>
                <div className="card mb-4">
                    <div className="card-header d-flex justify-content-between">
                        <div>
                            <i className="fas fa-table me-1"></i>
                            Employee Address

                        </div>

                        <div className="form-group row">

                            <div className="col-sm-12">
                                <input onChange={(e) => handleSearch(e.target.value)} type="text" className="form-control form-control-sm" id="colFormLabelSm" placeholder="Search" />
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <table className="table table-responsive table-stripped table-bordered">
                            <thead>
                                <tr>
                                    <th>EMP ID</th>
                                    <th>NAME</th>
                                    <th>CITY</th>
                                    <th>STATE</th>
                                    <th>PIN</th>
                                    <th>BRANCH</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    currentRecords.map((item) => {
                                        return (
                                            <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.address['city']}</td>
                                                <td>{item.address['state']}</td>
                                                <td>{item.address['pincode']}</td>
                                                <td>{item.branch}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                        <nav>
                                <ul className="pagination justify-content-end">

                                    {/* Previous */}
                                    <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                                    <button className="page-link" onClick={prevPage}>
                                        Previous
                                    </button>
                                    </li>

                                    {/* Page Numbers */}
                                    {
                                    [...Array(totalPages)].map((_, i) => (
                                        <li
                                        key={i}
                                        className={`page-item ${currentPage === i + 1 ? "active" : ""}`}
                                        >
                                        <button
                                            className="page-link"
                                            onClick={() => goToPage(i + 1)}
                                        >
                                            {i + 1}
                                        </button>
                                        </li>
                                    ))
                                    }

                                    {/* Next */}
                                    <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                                    <button className="page-link" onClick={nextPage}>
                                        Next
                                    </button>
                                    </li>

                                </ul>
                                </nav>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Address