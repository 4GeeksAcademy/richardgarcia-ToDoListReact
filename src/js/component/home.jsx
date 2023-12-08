import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [tarea,setTarea] = useState("")
	const [lista,setLista] = useState([])

	function guardarTarea (e) {
		e.preventDefault()
		setLista([...lista,tarea])
		setTarea("")
	}

	function eliminar(id) {
		let listaTareas = []
		listaTareas = lista.filter((item,index)=> {
			if (index != id) {
				return item
			}
		})

		setLista(listaTareas)
	}
	return (
		<div className="text-center container">
			<input className="form-control" type="text" value={tarea} onChange={(e)=>setTarea(e.target.value)}/>
			<button className="btn btn-success" onClick={guardarTarea}> Agregar tarea </button>
			<div>
				<ul className="list-group">
					{lista.map((item,id)=>(
						<li className="list-group-item" key={id}>
							{item}
							<button className="btn btn-danger float-end" onClick={()=>eliminar(id)}>X</button>
						</li>
					
					))}
				</ul>
			</div>
		</div>
	);
};

export default Home;
