import { Container } from "@nextui-org/react"
import RepoCard, { IRepository } from "../repoCard/RepoCard"

interface Props {
	repositories: IRepository[]
}

const RepoGrid = ({ repositories }: Props) => {
	return (
		<Container display='flex' justify='center'>
			{repositories.map(repo => (
				<RepoCard
					key={repo.header.text}
					header={repo.header}
					body={repo.body}
					footer={repo.footer}
					url={repo.url}
				/>
			))}
		</Container>
	)
}

export default RepoGrid
