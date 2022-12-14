import styled from 'styled-components';

const InputCard = styled.div`
	display: flex;
	flex-direction: ${props => (props.row ? 'row' : 'column')};
	width: 300px;
	margin: ${props => (props.margin ? props.margin : '60px 20px 20px 20px')};
	padding: 10px;
	border: 1px dotted black;
	border-radius: 5px;
	background-color: rgba(27, 36, 57, 1);
	color: white;
	list-style: none;
`;

export default InputCard;
