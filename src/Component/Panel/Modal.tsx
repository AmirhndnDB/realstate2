import React from "react";

function Modal({
  onClose,
  children,
  actionBar,
}: {
  onClose: () => void;
  children: React.ReactNode;
  actionBar: React.ReactNode;
}) {
  React.useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-gray-300 opacity-80 py-40"
      >
        <div className="fixed  p-2 bg-white text-black w-80 flex flex-col	gap-4 rounded-2xl border-green-600 border	">
          {children}
          <div className="flex  justify-end ">{actionBar}</div>
        </div>
      </div>
    </>
  );
}

export default Modal;
