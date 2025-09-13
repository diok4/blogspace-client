import { Button, Menu, Portal } from "@chakra-ui/react";
import type React from "react";
import { NavLink } from "react-router-dom";

type MenuItem = {
  value: string;
  label: string;
  to?: string; // ссылка для NavLink
  onClick?: () => void;
};

type DropdownMenuProps = {
  triggerLabel: React.ReactElement;
  items: MenuItem[];
};

export const DropdownMenu = ({ triggerLabel, items }: DropdownMenuProps) => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          {triggerLabel}
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {items.map((item) =>
              item.to ? (
                <Menu.Item key={item.value} value={item.value} asChild>
                  <NavLink to={item.to}>{item.label}</NavLink>
                </Menu.Item>
              ) : (
                <Menu.Item
                  key={item.value}
                  value={item.value}
                  onClick={item.onClick}
                >
                  {item.label}
                </Menu.Item>
              )
            )}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};
