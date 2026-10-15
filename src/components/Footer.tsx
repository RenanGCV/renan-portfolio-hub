import React from 'react';
import { Github, Instagram, Linkedin } from 'lucide-react';
import Monogram from '@/components/Monogram';
import { profile } from '@/data/profile';
import { contact, social } from '@/data/social';

const socialIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
};

const Footer = () => (
  <footer className="border-t border-border bg-muted/40">
    <div className="container flex flex-col gap-8 px-4 py-12 md:flex-row md:items-center md:justify-between md:px-6 lg:px-8">
      <div className="flex items-center gap-3">
        <Monogram className="h-10 w-10" />
        <div>
          <p className="font-display font-semibold">{profile.name}</p>
          <p className="text-sm text-muted-foreground">
            {profile.role} · {contact.location}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        {social.map((item) => {
          const Icon = socialIcons[item.icon];
          return (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${item.name} de ${profile.shortName}`}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-foreground/40 hover:text-foreground"
            >
              {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
            </a>
          );
        })}
      </div>
    </div>

    <div className="border-t border-border">
      <div className="container px-4 py-5 text-xs text-muted-foreground md:px-6 lg:px-8">
        © {new Date().getFullYear()} {profile.name}.
      </div>
    </div>
  </footer>
);

export default Footer;
