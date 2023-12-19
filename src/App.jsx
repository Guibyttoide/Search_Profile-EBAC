import { useState } from "react";

import Perfil from "./components/Perfil";
import ReposList from "./components/ReposList";

function App(props) {
	const [nomeUsuario, setNomeUsuario] = useState("");

	return (
		<>
			<input
				className="container searchBar"
				type="text"
				placeholder="Digite um usuário"
				onBlur={(e) => setNomeUsuario(e.target.value)}
			/>

			{nomeUsuario.length > 4 && (
				<>
					<Perfil nomeUsuario={nomeUsuario} />
					<ReposList nomeUsuario={nomeUsuario} />
				</>
			)}
		</>
	);
}

export default App;
