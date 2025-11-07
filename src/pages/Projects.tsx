import { Container, Title, SimpleGrid } from '@mantine/core';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../data/projects';

export function Projects() {
  return (
    <Container py="xl">
      <Title order={2} mb="md">Projects</Title>
      <SimpleGrid cols={{ base: 1, sm: 2 }}>
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </SimpleGrid>
    </Container>
  );
}