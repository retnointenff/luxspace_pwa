function Modal({ handleShowModal }) {
  return (
    <div
      className="fixed inset-0 z-40 w-100 min-h-screen"
      onClick={handleShowModal}
    >
      <div className="fixed inset-0 bg-black flex items-center justify-center opacity-80">
        <div className="bg-white p-0 md:p-6 z-99 opacity-100">
          <div className="w-full h-full relative ">
            <iframe
              title="Video"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/3h0_v1cdUIA"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
