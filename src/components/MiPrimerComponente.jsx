import { useEffect, useState } from 'react';
import { esperarAlgo } from '../utils/promesa';

export const MiPrimerComponente = () => {
	const [info, setInfo] = useState({ id: 0, nombre: 'Sin nombre', apellido: 'Sin apellido' });

	const [loading, setLoading] = useState(false);

	const [error, setError] = useState(false);

	const decirHola = async () => {
		const mensaje = await esperarAlgo('Daniela');
		return {
			mensaje,
			id: 1,
			nombre: 'Daniela',
			apellido: 'Gutierrez',
		};
	};

	useEffect(() => {
		const mostrarInformacion = async () => {
			try {
				setLoading(true);
				const data = await decirHola();
				setLoading(false);
				setInfo(data);
			} catch (error) {
				console.log(error);
				setError('Ocurrio un error al obtener la información');
			}
		};

		mostrarInformacion();
	}, []);

	const [changeInfo, setChangeInfo] = useState({});

	useEffect(() => {
		setInfo(changeInfo);
	}, [changeInfo]);

	const cambiarNombre = () => {
		setChangeInfo({
			id: 2,
			nombre: 'Oscar',
			apellido: 'Calle',
		});
	};

	return (
		<div>
			<h1>Mi primer componente</h1>
			<div>
				{loading ? (
					<div>Cargando info...</div>
				) : (
					<ul>
						<li id="id">
							<strong>ID:</strong> {info.id}
						</li>
						<li id="nombre">
							<strong>NOMBRE:</strong> {info.nombre}
						</li>
						<li id="apellido">
							<strong>APELLIDO:</strong> {info.apellido}
						</li>
					</ul>
				)}

				<div style={{ color: 'red' }}>{error}</div>
			</div>
			<div>
				<button onClick={cambiarNombre}>Cambiar el nombre</button>
			</div>
		</div>
	);
};
