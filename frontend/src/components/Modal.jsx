import styled from "styled-components";

const ModalBackground = styled.div`
    position: fixed;
    z-index: 1000;
    overflow: auto;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
`;

const ModalBody = styled.div`
    background-color: lightblue;
    margin: 10% auto;
    padding: 20px;
    width: 50%;
    border-radius: 5px;
    border: solid;
    border-color: blue;
`;

export const Modal = ({ shouldShow, onRequestColse, children }) => {
    return (shouldShow ? (
        <ModalBackground onClick={onRequestColse}>
            <ModalBody onClicl={e => e.stopPropagation()}>
                <button onClick={onRequestColse}>Hide Modal</button>
                {children}
            </ModalBody>
        </ModalBackground>
    ) : null);
}