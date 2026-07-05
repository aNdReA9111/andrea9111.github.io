import { Box, Container, Flex, Group, Text } from '@mantine/core';
import { contact } from '../../data';

export function SiteFooter() {
  return (
    <Box
      component="footer"
      py="lg"
      style={{ borderTop: '1px solid rgba(148,163,184,0.12)' }}
    >
      <Container size="lg">
        <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" gap="sm" align={{ md: 'center' }}>
          <Box>
            <Text fw={800} style={{ letterSpacing: '-0.03em' }}>
              Andrea Fiorellino
            </Text>
            <Text size="sm" c="dimmed" mt={4}>
              Cybersecurity, AI, and software engineering.
            </Text>
          </Box>

          <Group gap="md" wrap="wrap">
            <Text component="a" href={`mailto:${contact.email}`} size="sm" fw={600} c="dimmed" style={{ textDecoration: 'none' }}>
              Email
            </Text>
            <Text component="a" href={contact.github} target="_blank" rel="noreferrer" size="sm" fw={600} c="dimmed" style={{ textDecoration: 'none' }}>
              GitHub
            </Text>
            <Text component="a" href={contact.linkedin} target="_blank" rel="noreferrer" size="sm" fw={600} c="dimmed" style={{ textDecoration: 'none' }}>
              LinkedIn
            </Text>
          </Group>
        </Flex>
      </Container>
    </Box>
  );
}