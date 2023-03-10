import axios from 'axios';
import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

const HomePage = () => {
  const [passcode, setPasscode] = useState<string>('');
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = useCallback(async () => {
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    const { data } = await axios.post<{ status: boolean }>('/api/auth', {
      passcode,
    });
    setIsLoading(false);
    if (!data.status) {
      alert('Wrong passcode');
      return;
    }
    setIsCorrect(true);
  }, [isLoading, passcode]);

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
            <br />
            새로고침 할 때도 쿠키에 세션 유지 + 하위 URL 주소로 들어갔을 때도
            작동하도록 고쳥야함
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
