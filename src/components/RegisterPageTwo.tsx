import React, { useState } from 'react';
import ProfilePicture from '../components/formStepTwo/ProfilePicture';
import SelectInput from '../components/formStepTwo/SelectInput';
import Favorites from '../components/formStepTwo/Favorites';
import SuccessMessage from '../components/formStepTwo/SuccessMessage';
import TextArea from '../components/formStepTwo/TextArea';
import Sex from '../components/formStepTwo/Sex';

interface FormValues {
  aboutMe: string;
  relationship: string;
  interests: string;
  smoking: string;
  drinking: string;
  favorites: {
    favoriteMusic: "",
    favoriteMovies: "",
    favoriteGames: "",
    favoriteBooks: "",
  },
}

const formStepTwo: React.FC = () => {
  const [profilePicture, setProfilePicture] = useState<File | null>(null);
  const [formValues, setFormValues] = useState<FormValues>({
    aboutMe: '',
    relationship: '',
    interests: '',
    smoking: '',
    drinking: '',
    favorites: {
      favoriteMusic: "",
      favoriteMovies: "",
      favoriteGames: "",
      favoriteBooks: "",
    },
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: keyof FormValues, value: string) => {
    setFormValues((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleProfilePictureChange = (file: File) => {
    setProfilePicture(file);
  };

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setProfilePicture(null);
      setFormValues({
        aboutMe: '',
        relationship: '',
        interests: '',
        smoking: '',
        drinking: '',
        favorites: {
          favoriteMusic: "",
          favoriteMovies: "",
          favoriteGames: "",
          favoriteBooks: "",
        },
      });
    }, 3000);
  };

  return (
    <div className="registerTwo">
      <ProfilePicture onFileSelect={handleProfilePictureChange} />

      <TextArea
        label="Quem sou eu"
        value={formValues.aboutMe}
        onChange={(e) => handleChange('aboutMe', e.target.value)}
      />

      <TextArea
        label="Interesses"
        value={formValues.interests}
        onChange={(e) => handleChange('interests', e.target.value)}
      />

      <SelectInput
        label="Relacionamento"
        options={[
          { value: 'solteiro', label: 'Solteiro(a)' },
          { value: 'enrolado', label: 'Enrolado(a)' },
          { value: 'namorando', label: 'Namorando' },
          { value: 'casado', label: 'Casado(a)' },
          { value: 'viuvo', label: 'Viúvo(a)' },
          { value: 'divorciado', label: 'Divorciado(a)' },
        ]}
        value={formValues.relationship}
        onChange={(e) => handleChange('relationship', e.target.value)}
      />

      <Sex />

      <SelectInput
        label="Fumo"
        options={[
          { value: 'nao', label: 'Não' },
          { value: 'raramente', label: 'Raramente' },
          { value: 'socialmente', label: 'Socialmente' },
          { value: 'sempre', label: 'Sempre' },
        ]}
        value={formValues.smoking}
        onChange={(e) => handleChange('smoking', e.target.value)}
      />

      <SelectInput
        label="Bebo"
        options={[
          { value: 'nao', label: 'Não' },
          { value: 'raramente', label: 'Raramente' },
          { value: 'socialmente', label: 'Socialmente' },
          { value: 'sempre', label: 'Sempre' },
        ]}
        value={formValues.drinking}
        onChange={(e) => handleChange('drinking', e.target.value)}
      />

    <Favorites
      favoriteMusic={formValues.favorites.favoriteMusic}
      favoriteMovies={formValues.favorites.favoriteMovies}
      favoriteGames={formValues.favorites.favoriteGames}
      favoriteBooks={formValues.favorites.favoriteBooks}
      onChange={(field, value) => handleChange(`favorites.${field}` as keyof FormValues, value)}
    />

      <button onClick={handleSubmit}>Enviar</button>

      {submitted && <SuccessMessage />}
    </div>
  );
};

export default formStepTwo;
