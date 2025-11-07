import { Group, Burger, Drawer, Stack, Button, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const location = useLocation();

  const links = [
    { label: 'Home', path: '/' },
    { label: 'CV', path: '/cv' },
    { label: 'Projects', path: '/projects' },
    { label: 'Skills', path: '/skills' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <Group justify="space-between" h="100%" px="md">
        <Text fw={700} size="lg" c="primary">🚧 Work in Progress 🛠️</Text>

        {/* Desktop Navigation */}
        <Group visibleFrom="sm">
          {links.map((link) => (
            <Button
              key={link.path}
              component={Link}
              to={link.path}
              variant={location.pathname === link.path ? 'filled' : 'subtle'}
              color={location.pathname === link.path ? 'primary' : 'gray'}
              size="sm"
            >
              {link.label}
            </Button>
          ))}
          <ThemeToggle />
        </Group>

        {/* Mobile Burger */}
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" />
      </Group>

      {/* Drawer per mobile */}
      <Drawer opened={opened} onClose={close} padding="md" size="xs">
        <Stack>
          {links.map((link) => (
            <Button
              key={link.path}
              component={Link}
              to={link.path}
              variant={location.pathname === link.path ? 'filled' : 'light'}
              color="primary"
              onClick={close}
            >
              {link.label}
            </Button>
          ))}
          <ThemeToggle />
        </Stack>
      </Drawer>
    </>
  );
}