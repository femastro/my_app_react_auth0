import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const API_URL = "https://www.mastrosoft.com.ar/api/public/neumaticos";

export default function Article() {
    const { id } = useParams();
    const apiUrl = `${API_URL}/${id}`;
    const [data, setData] = useState({});

    useEffect(() => {
        try {
            handleLoad();
        } catch (error) {
            console.log(error);
        }
    });

    const handleLoad = async () => {
        try {
            await fetch(apiUrl)
                .then((response) => response.json())
                .then((data) => {
                    setData(data);
                });
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value,
        });
    };

    const notify = (message, alerta) => {
        if (alerta) {
            toast.success(message, {
                position: "top-center",
                autoClose: 3000,
                success: setTimeout(() => {
                    window.location = "/home";
                }, 3200),
            });
        } else {
            toast.error(message, {
                position: "top-center",
                autoClose: 3000,
                success: setTimeout(() => {
                    window.location = "/home";
                }, 3200),
            });
        }
    };

    const handleButton = () => {
        let btn = document.getElementById("button");
        btn.textContent = "Saving !";
        btn.setAttribute("disabled", "disabled");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        handleButton();

        const Options = {
            method: "PUT",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(data),
        };

        try {
            const apiUrl = `${API_URL}/update/${id}`;
            const result = await fetch(apiUrl, Options).then((d) => d.json());

            notify(result.message, result.alerta);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="container">
            <ToastContainer />
            <div className="row">
                <div className="card col-md-5 mx-auto">
                    <div className="card-header text-center mt-2">
                        <h1>Edit Article</h1>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit} method="POST">
                            <div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-2">
                                            <label className="form-label">
                                                Codigo Articulo
                                            </label>
                                            <input
                                                type="text"
                                                name="cod_Articulo"
                                                className="form-control form-control-sm"
                                                defaultValue={data.cod_Articulo}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-2">
                                            <label className="form-label">
                                                Marca
                                            </label>
                                            <input
                                                type="text"
                                                name="marca"
                                                className="form-control form-control-sm"
                                                defaultValue={data.marca}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-2">
                                    <label className="form-label">Modelo</label>
                                    <input
                                        type="text"
                                        name="modelo"
                                        className="form-control form-control-sm"
                                        defaultValue={data.modelo}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-2">
                                    <label className="form-label">Medida</label>
                                    <input
                                        type="text"
                                        name="medida"
                                        className="form-control form-control-sm"
                                        defaultValue={data.medida}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-2">
                                            <label className="form-label">
                                                Codigo Proveedor
                                            </label>
                                            <input
                                                type="text"
                                                name="cod_Proveedor"
                                                className="form-control form-control-sm"
                                                defaultValue={
                                                    data.cod_Proveedor
                                                }
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-2">
                                            <label className="form-label">
                                                Cantidad
                                            </label>
                                            <input
                                                type="number"
                                                name="cantidad"
                                                className="form-control form-control-sm w-50"
                                                defaultValue={data.cantidad}
                                                onChange={handleChange}
                                                min="0"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <button
                                    className="btn btn-info btn-block w-100"
                                    type="submit"
                                    id="button"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="row mb-3 text-center">
                        <div className="col-md-5 mx-auto">
                            <Link
                                className="btn btn-danger btn-sm w-100"
                                to={`/home`}
                            >
                                Back
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
