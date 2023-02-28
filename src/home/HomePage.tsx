import axios from 'axios';
import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

const HomePage = () => {
  const [passcode, setPasscode] = useState<string>('');
  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  const onSubmit = useCallback(async () => {
    const { data } = await axios.post<{ status: boolean }>('/api/auth', {
      passcode,
    });
    if (!data.status) {
      alert('Wrong passcode');
      return;
    }
    setIsCorrect(true);
  }, [passcode]);

  return (
    <>
      {isCorrect ? (
        <Iframe src="https://junho.io" />
      ) : (
        <Container>
          <Input
            type="text"
            value={passcode}
            onChange={(e) => setPasscode(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                onSubmit();
              }
            }}
          />
          <Button type="button" onClick={onSubmit}>
            Submit
          </Button>

          <span style={{ color: 'gray' }}>
            password is juno2023 (not exposed in browser context)
          </span>
        </Container>
      )}
    </>
  );
};

export default HomePage;

const Container = styled.div``;

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
`;
const Input = styled.input`
  border: 1px solid #000;
`;
const Button = styled.button``;
