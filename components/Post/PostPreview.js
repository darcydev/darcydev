import styled from 'styled-components';
import { BsArrowRight as Arrow } from 'react-icons/bs';

import Date from '../Date';
import LinkComponent from '../Link';

export default function PostPreview({ post }) {
	const { coverImage, title, description, slug, createdAt } = post;

	const url = `/blog/${slug}`;

	return (
		<StyledContainer>
			<LinkComponent href={url}>
				<div className='img-wrp'>
					<img src={coverImage.url} alt={title} />
				</div>
			</LinkComponent>
			<div className='txt-wrp'>
				<LinkComponent href={url}>
					<h2>{title}</h2>
				</LinkComponent>
				{createdAt && <Date datetime={createdAt} />}
				<p>{description}</p>
				<div className='btn-wrp'>
					<LinkComponent href={url}>
						Read <Arrow size={23} />
					</LinkComponent>
				</div>
			</div>
		</StyledContainer>
	);
}

const StyledContainer = styled.div`
	display: flex;
	margin: 40px 0;
	height: 200px;
	box-shadow: 1px 0px 10px 2px rgba(209, 209, 209, 0.75);

	:first-child {
		margin-top: 0;
	}

	:last-child {
		margin-bottom: 0;
	}

	.img-wrp {
		margin-right: 20px;
	}

	.txt-wrp {
		position: relative;
		flex: 1;
		padding-top: 20px;

		h2 {
			margin: 0 0 10px 0;
			font-size: 25px;
		}

		time {
			font-size: 14px;
			font-style: italic;
		}

		p {
			font-size: 18px;
		}

		.btn-wrp {
			a {
				position: absolute;
				bottom: 2px;
				border-radius: 5px;
				padding: 12px;
				width: 150px;
				display: flex;
				align-items: center;
				justify-content: space-between;
				text-transform: uppercase;

				svg {
					position: absolute;
					right: 15px;
				}

				:hover {
					svg {
						right: 10px;
					}
				}
			}
		}
	}
`;
