import { Group, Burger, Drawer, Stack, Button, Text, useMantineColorScheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const location = useLocation();
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

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
        <Text fw={700} size="lg" c="primary">
          🚧 Work in Progress 🛠️
        </Text>

        {/* Desktop Navigation */}
        <Group visibleFrom="sm">
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Button
                key={link.path}
                component={Link}
                to={link.path}
                variant={isActive ? 'filled' : 'subtle'}
                color={isActive ? (dark ? 'blue' : 'dark') : 'gray'}
                size="sm"
                styles={{
                  root: {
                    ...(isActive && {
                      backgroundColor: dark ? '#1c7ed6' : '#e9ecef',
                      color: dark ? 'white' : 'black',
                    }),
                    ...(isActive &&
                      !dark && {
                        border: '1px solid #adb5bd',
                      }),
                  },
                }}
              >
                {link.label}
              </Button>
            );
          })}
          <ThemeToggle />
        </Group>

        {/* Mobile Burger */}
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" />
      </Group>

      {/* Drawer per mobile */}
      <Drawer opened={opened} onClose={close} padding="md" size="xs">
        <Stack>
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Button
                key={link.path}
                component={Link}
                to={link.path}
                variant={isActive ? 'filled' : 'light'}
                color={isActive ? (dark ? 'blue' : 'dark') : 'gray'}
                onClick={close}
              >
                {link.label}
              </Button>
            );
          })}
          <ThemeToggle />
        </Stack>
      </Drawer>
    </>
  );
}