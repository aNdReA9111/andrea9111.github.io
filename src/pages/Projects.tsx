import { Box, Container, SimpleGrid } from '@mantine/core';
import { projects } from '../data';
import { ProjectCard } from '../components/shared/ProjectCard';
import { SectionHeading } from '../components/shared/SectionHeading';

export function Projects() {
  return (
    <Container size="lg" py={{ base: '3.5rem', md: '5rem' }}>
      <SectionHeading
        eyebrow="Projects"
        title="Built from principles"
        description="Selected Works. A curated repository of low-level software engineering, deep learning infrastructure, and automated systems."
      />

      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl">
        {projects.map((project, index) => (
          <Box key={project.title} style={{ gridColumn: index === 0 ? '1 / -1' : 'auto' }}>
            <ProjectCard {...project} featured={index === 0} />
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
}