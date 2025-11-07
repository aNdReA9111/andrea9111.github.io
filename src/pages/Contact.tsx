import { Container, Title, Text, Button, Group } from '@mantine/core';
import { IconBrandGithub, IconBrandLinkedin, IconSend } from '@tabler/icons-react';
import { contact } from '../data/contact';

export function Contact() {
  return (
    <Container py="xl">
      <Title order={2}>Contact</Title>
      <Text mt="md">Feel free to reach out on my social profiles or send me an email!</Text>
      <Group mt="md">
        <Button
          leftSection={<IconBrandGithub size={16} />}
          component="a"
          href={contact.github}
          target="_blank"
          color="dark"
        >
          GitHub
        </Button>
        {/* <Button
          leftSection={<IconBrandLinkedin size={16} />}
          component="a"
          href={contact.linkedin}
          target="_blank"
          color="blue"
        >
          LinkedIn
        </Button> */}
        <Button
          leftSection={<IconSend size={16} />}
          component="a"
          href={`mailto:${contact.email}`}
          variant="outline"
        >
          Email
        </Button>
      </Group>
    </Container>
  );
}