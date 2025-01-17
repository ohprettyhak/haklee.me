import { Command } from 'cmdk';
import { FC, ReactElement, useState } from 'react';

import {
  Dialog,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from 'src/components/dialog';

const CommandMenu: FC = (): ReactElement => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <Dialog open={isMenuOpen} onOpenChange={setIsMenuOpen}>
      <DialogTrigger asChild>
        <button>Edit profile</button>
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay />
        <DialogContent>
          <DialogTitle aria-hidden />
          <DialogDescription aria-hidden />

          <Command label="Command Menu">
            <Command.Input />
            <Command.List>
              <Command.Empty>No results found.</Command.Empty>

              <Command.Group heading="Letters">
                <Command.Item>a</Command.Item>
                <Command.Item>b</Command.Item>
                <Command.Separator />
                <Command.Item>c</Command.Item>
              </Command.Group>

              <Command.Item>Apple</Command.Item>
            </Command.List>
          </Command>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};

export default CommandMenu;
