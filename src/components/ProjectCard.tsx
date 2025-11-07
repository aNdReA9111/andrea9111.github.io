import { Card, Image, Text, Button, Group } from '@mantine/core';
import { IconExternalLink } from '@tabler/icons-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export function ProjectCard({ title, description, image, link }: ProjectCardProps) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image src={image} alt={title} />
      </Card.Section>
      <Text fw={600} mt="sm">{title}</Text>
      <Text size="sm" c="dimmed" mt="xs">{description}</Text>
      <Group justify="end" mt="md">
        <Button
          rightSection={<IconExternalLink size={16} />}
          component="a"
          href={link}
          target="_blank"
          variant="light"
          color="primary"
        >
          View
        </Button>
      </Group>
    </Card>
  );
}