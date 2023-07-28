import React, { useRef, ChangeEvent } from 'react';

interface ProfilePictureProps {
  onFileSelect: (file: File) => void;
}

const ProfilePicture: React.FC<ProfilePictureProps> = ({ onFileSelect }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      onFileSelect(selectedFile);
    }
  };

  return (
    <div className="profile-picture-container">
      <h3> Foto de Perfil</h3>
      <div className="profile-picture-content">
        <img
          src="/profilePictureNull.jpg"
          alt="Foto de Perfil"
          className="profile-picture-img"
        />
      </div>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <button onClick={handleFileSelect}>Procurar</button>
    </div>
  );
};

export default ProfilePicture;
