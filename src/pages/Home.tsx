import { Container, Title, Text, Group, Button, Image, Stack } from '@mantine/core';
import { Link } from 'react-router-dom';
import { about } from '../data/about';

export function Home() {
  return (
    <Container py="xl">
      <Group justify="space-between" align="center" wrap="wrap">
        <Stack flex={1} gap="md">
          <Title order={1}>Hi, I’m Andrea Fiorellino</Title>
          <Text size="lg" c="dimmed">{about.description}</Text>
          <Group mt="md">
            <Button component={Link} to="/aNdReA9111/projects" size="md">View Projects</Button>
            <Button component={Link} to="/aNdReA9111/contact" variant="outline" size="md">Contact Me</Button>
          </Group>
        </Stack>
        <Image
          src={about.profileImage}
          alt="Profile"
          radius="xl"
          w={{ base: '100%', sm: 280 }}
          mt={{ base: 'md', sm: 0 }}
        />
      </Group>
    </Container>
  );
}