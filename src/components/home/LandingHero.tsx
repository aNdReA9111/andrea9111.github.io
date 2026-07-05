// import { ActionIcon, Badge, Box, Button, Card, Flex, Group, Image, Text, Title, useMantineColorScheme } from '@mantine/core';
import { ActionIcon, Box, Button, Card, Flex, Group, Image, Text, Title, useMantineColorScheme } from '@mantine/core';
import { IconBrandGithub, IconBrandLinkedin, IconMail } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { contact } from '../../data';

export function LandingHero() {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <Box>
      <Flex direction={{ base: 'column', lg: 'row' }} gap={{ base: 'xl', lg: '3rem' }} align="center">
        <Box style={{ flex: 1 }}>
          {/* <Badge variant="light" color="emerald" radius="xl" size="lg" mb="lg">
            Portfolio / Cybersecurity / Systems
          </Badge> */}

          <Title order={1} style={{ fontSize: 'clamp(3rem, 7vw, 5.6rem)', lineHeight: 0.95, letterSpacing: '-0.06em' }}>
            Hi, I’m Andrea.
          </Title>

          <Text mt="lg" size="lg" c="dimmed" style={{ maxWidth: 680, lineHeight: 1.8 }}>
            I’m a Computer Science graduate from the University of Bologna, where I earned my Bachelor’s degree. I’m currently attending a Master’s in Cybersecurity at UNIBO. I’m passionate about every aspect of computer science — from software engineering to artificial intelligence — with a special focus on cybersecurity and AI-driven technologies.
          </Text>

          <Group mt="xl" gap="md">
            <Button component={Link} to="/projects" size="md" radius="xl" color="emerald">
              Explore projects
            </Button>
            <Button component={Link} to="/formation" size="md" radius="xl" variant="light" color="emerald">
              See formation
            </Button>
          </Group>

          <Group mt="lg" gap="sm" wrap="wrap">
            <ActionIcon
              component="a"
              href={`mailto:${contact.email}`}
              variant="light"
              color="emerald"
              size="lg"
              radius="xl"
              aria-label="Send email"
            >
              <IconMail size={18} />
            </ActionIcon>
            <ActionIcon
              component="a"
              href={contact.github}
              target="_blank"
              rel="noreferrer"
              variant="light"
              color="emerald"
              size="lg"
              radius="xl"
              aria-label="GitHub profile"
            >
              <IconBrandGithub size={18} />
            </ActionIcon>
            <ActionIcon
              component="a"
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              variant="light"
              color="emerald"
              size="lg"
              radius="xl"
              aria-label="LinkedIn profile"
            >
              <IconBrandLinkedin size={18} />
            </ActionIcon>
          </Group>
        </Box>

        <Box style={{ flex: 0.95, width: '100%', maxWidth: 560 }}>
          <Card radius="28px" p="lg" withBorder style={{ background: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.78)' }}>
            <Box style={{ aspectRatio: '4 / 5', borderRadius: '22px', overflow: 'hidden', position: 'relative', background: 'rgba(0,0,0,0.08)' }}>
              <Image
                src="/img/profile.jpg"
                alt="Andrea Fiorellino portrait"
                h="100%"
                fit="cover"
                style={{ width: '100%', height: '100%', objectPosition: 'center top' }}
              />
            </Box>
          </Card>
        </Box>
      </Flex>
    </Box>
  );
}