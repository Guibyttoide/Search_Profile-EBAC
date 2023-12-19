// Perfil.js
import React, { useEffect, useState } from "react";
import styles from "./Perfil.module.css";

const Perfil = ({ nomeUsuario }) => {
	const [perfilInfo, setPerfilInfo] = useState({});
	const [carregandoPerfil, setCarregandoPerfil] = useState(true);

	useEffect(() => {
		fetch(`https://api.github.com/users/${nomeUsuario}`)
			.then((res) => res.json())
			.then((perfil) => {
				setPerfilInfo(perfil);
				setCarregandoPerfil(false);
			})
			.catch((error) => {
				console.error("Erro ao carregar perfil:", error);
				setCarregandoPerfil(false);
			});
	}, [nomeUsuario]);

	return (
		<div className="container animeDown">
			<header className={styles.header}>
				<img className={styles.avatar} src={perfilInfo.avatar_url} alt="" />
				<>
					{!carregandoPerfil && (
						<div className={styles.headerContainer}>
							<div className={styles.headerName}>
								<h1>{perfilInfo.login}</h1>
								<p>{perfilInfo.name}</p>
							</div>
							<div className={styles.subInfoContainer}>
								<p className={styles.name}>
									Localização: <span>{perfilInfo.location}</span>
								</p>
								<div className={styles.headerRepos}>
									<p className={styles.name}>
										Repositórios Públicos: <span>{perfilInfo.public_repos}</span>
									</p>
								</div>
								<div className={styles.headerFollows}>
									<p className={styles.name}>
										Seguidores: <span>{perfilInfo.followers}</span>
									</p>
									<p className={styles.name}>
										Seguindo: <span>{perfilInfo.following}</span>
									</p>
								</div>
							</div>
						</div>
					)}
				</>
			</header>
		</div>
	);
};

export default Perfil;
