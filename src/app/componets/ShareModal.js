import { Modal } from "flowbite-react";
import React from "react";
import {
  FacebookIcon,
  FacebookShareButton,
  LineIcon,
  LineShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  OKIcon,
  OKShareButton,
  PocketIcon,
  PocketShareButton,
  TwitterShareButton,
  XIcon,
} from "react-share";

const ShareModal = ({ openModal, onCloseModal, title, shareUrl }) => {
  return (
    <div>
      <Modal
        show={openModal}
        size="md"
        position="center"
        onClose={onCloseModal}
        popup
      >
        <Modal.Header>
          <h3 className="text-[18px] font-bold">Share this book</h3>
        </Modal.Header>
        <Modal.Body>
          <div className="flex gap-8">
            <FacebookShareButton url={shareUrl}>
              <FacebookIcon size={32} round />
            </FacebookShareButton>
            <TwitterShareButton url={shareUrl} title={title}>
              <XIcon size={32} round />
            </TwitterShareButton>
            <LinkedinShareButton url={shareUrl}>
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>
            <OKShareButton url={shareUrl}>
              <OKIcon size={32} round />
            </OKShareButton>
            <LineShareButton url={shareUrl} title={title}>
              <LineIcon size={32} round />
            </LineShareButton>
            <PocketShareButton url={shareUrl} title={title}>
              <PocketIcon size={32} round />
            </PocketShareButton>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ShareModal;
