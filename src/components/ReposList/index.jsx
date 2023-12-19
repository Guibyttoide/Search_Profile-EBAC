import { useEffect, useState } from "react";

import styles from "./ReposList.module.css";

const ReposList = ({ nomeUsuario }) => {
	const [repos, setRepos] = useState([]);
	const [estaCarregando, setEstaCarregando] = useState(true);

	useEffect(() => {
		setEstaCarregando(true);

		fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
			.then((res) => res.json())
			.then((resJson) => {
				setTimeout(() => {
					setEstaCarregando(false);
					setRepos(resJson);
				}, 1500);
			});
	}, [nomeUsuario]);

	return (
		<div className="container">
			{estaCarregando ? (
				<>
					<span className={styles.Loading}></span>
				</>
			) : (
				<ul className={styles.list}>
					{Array.isArray(repos) ? (
						repos.map(
							({
								name,
								language,
								html_url,
								id,
								created_at,
								updated_at,
								visibility,
							}) => (
								<li className={styles.listItem} key={id}>
									<div className={styles.listItemName}>
										<b>Projeto:</b>
										<span>{name}</span>
									</div>
									<div className={styles.listItemLanguage}>
										<b>Linguagem:</b>
										<span>{language}</span>
									</div>
									<div className={styles.listItemLanguage}>
										<b>Criado em:</b>
										<span>{created_at}</span>
									</div>
									<div className={styles.listItemLanguage}>
										<b>Atualizado em:</b>
										<span>{updated_at}</span>
									</div>
									<div className={styles.listItemLanguage}>
										<b>Visibilidade:</b>
										<span>{visibility}</span>
									</div>
									<div className={styles.listItemLanguage}>
										<b>ID:</b>
										<span>{id}</span>
									</div>
									<a
										className={styles.listItemLink}
										target="_blank"
										href={html_url}
									>
										Visitar no Github
									</a>{" "}
								</li>
							)
						)
					) : (
						<p>Nenhum repositório encontrado.</p>
					)}
				</ul>
			)}
		</div>
	);
};

export default ReposList;
