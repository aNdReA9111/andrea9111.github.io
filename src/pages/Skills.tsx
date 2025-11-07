import { Container, Title, Stack, Card, Image, SimpleGrid } from '@mantine/core';

import { skillCategories } from '../data/skills';

export function Skills() {
  return (
    <Container py="xl">
      <Title order={2} mb="lg" ta="center">
        Skills
      </Title>

      <Stack gap="xl">
        {skillCategories.map((category) => (
          <Card key={category.title} shadow="sm" withBorder radius="md" p="md">
            <Title order={3} mb="md">
              {category.title}
            </Title>

            <SimpleGrid cols={{ base: 2, sm: 3, md: 4, lg: 5 }} spacing="md">
              {category.badges.map((badge) => (
                <Image
                  key={badge}
                  src={badge}
                  alt="skill badge"
                  radius="sm"
                  fit="contain"
                  style={{ maxHeight: 28 }}
                />
              ))}
            </SimpleGrid>
          </Card>
        ))}
      </Stack>
    </Container>
  );
}