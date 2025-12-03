import React from "react";

const DeleteConfirmationModal = ({ show, post, onDelete, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl w-80 p-6 animate-fadeIn">
        <h2 className="text-xl font-semibold text-gray-800 text-center">
          Delete Post?
        </h2>

        <p className="text-gray-600 text-center mt-3">
          Are you sure you want to delete{" "}
          <span className="font-medium text-red-500">{post?.title}</span>?  
          This action cannot be undone.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-gray-200 text-gray-800 hover:bg-gray-300"
          >
            Cancel
          </button>

          <button
            onClick={onDelete}
            className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
