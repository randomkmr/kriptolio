import React, { useState } from "react";
import { Modal } from "../components/Modal";

export const NotFoundPage = () => {
    const [shouldShowModal, setShouldShowModal] = useState(false);
    return (
        <>
            <Modal
                shouldShow={shouldShowModal}
                onRequestColse={() => {
                    setShouldShowModal(false)
                }}>
                <h1>Not Found</h1>
            </Modal>
            <button onClick={() => setShouldShowModal(!shouldShowModal)}> Press the button to see the errror.</button>
        </>
    )
}