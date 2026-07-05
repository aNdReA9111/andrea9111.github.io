import { Box, SimpleGrid } from '@mantine/core';
import { projects } from '../../data';
import { ProjectCard } from '../shared/ProjectCard';
import { SectionHeading } from '../shared/SectionHeading';

export function FeaturedProjects() {
  const featuredTitles = [
    'µPandOS',
    'Nand2Tetris',
    'Deep Learning for Crack Detection in Masonry (Bachelor Thesis)',
    'Travel Companion App',
  ];

  const featuredProjects = projects.filter((project) => featuredTitles.includes(project.title));

  return (
    <Box mt={{ base: '3.5rem', md: '5rem' }}>
      <SectionHeading
        eyebrow="Selected work"
        title="Featured projects"
        description="A curated preview of the most relevant technical work for the landing page."
      />

      <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
        {featuredProjects.map((project, index) => (
          <ProjectCard
            key={project.title}
            {...project}
            featured={index === 0 || index === 1}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}