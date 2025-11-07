import { Container, Title, Text, Image } from '@mantine/core';
import { about } from '../data/about';

export function About() {
  return (
    <Container py="xl">
      <Title order={2}>About Me</Title>
      <Image src={about.profileImage} alt="Profile" width={150} radius="xl" mt="md" />
      <Text mt="md" size="sm">{about.description}</Text>
    </Container>
  );
}