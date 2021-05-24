import { Icon } from '@iconify/react';
import fileFill from '@iconify/icons-eva/file-fill';
import starFill from '@iconify/icons-eva/star-fill';
import roundSend from '@iconify/icons-ic/round-send';
import emailFill from '@iconify/icons-eva/email-fill';
import inboxFill from '@iconify/icons-eva/inbox-fill';
import shareFill from '@iconify/icons-eva/share-fill';
import roundLabel from '@iconify/icons-ic/round-label';
import roundForum from '@iconify/icons-ic/round-forum';
import { NavLink as RouterLink } from 'react-router-dom';
import trash2Fill from '@iconify/icons-eva/trash-2-fill';
import roundReport from '@iconify/icons-ic/round-report';
import roundLabelImportant from '@iconify/icons-ic/round-label-important';
// material
import { ListItem, Typography, ListItemText, ListItemIcon } from '@material-ui/core';
// @types
import { MailLabel } from '../../../@types/mail';
// routes
import { PATH_DASHBOARD } from '../../../routes/paths';

// ----------------------------------------------------------------------

const LABEL_ICONS = {
  all: emailFill,
  inbox: inboxFill,
  trash: trash2Fill,
  drafts: fileFill,
  spam: roundReport,
  sent: roundSend,
  starred: starFill,
  important: roundLabelImportant,
  id_social: shareFill,
  id_promotions: roundLabel,
  id_forums: roundForum
};

const linkTo = (label: MailLabel) => {
  const baseUrl = PATH_DASHBOARD.mail.root;

  if (label.type === 'system') {
    return `${baseUrl}/${label.id}`;
  }
  if (label.type === 'custom') {
    return `${baseUrl}/label/${label.name}`;
  }
  return baseUrl;
};

// ----------------------------------------------------------------------

type MailSidebarItemProps = {
  label: MailLabel;
};

export default function MailSidebarItem({ label, ...other }: MailSidebarItemProps) {
  const isUnread = label.unreadCount > 0;

  return (
    <ListItem
      button
      to={linkTo(label)}
      component={RouterLink}
      activeClassName="isActive"
      sx={{
        px: 3,
        height: 48,
        typography: 'body2',
        color: 'text.secondary',
        textTransform: 'capitalize',
        '&.isActive': {
          color: 'text.primary',
          fontWeight: 'fontWeightMedium',
          bgcolor: 'action.selected'
        }
      }}
      {...other}
    >
      <ListItemIcon>
        <Icon icon={LABEL_ICONS[label.id]} style={{ color: label.color }} width={24} height={24} />
      </ListItemIcon>

      <ListItemText disableTypography primary={label.name} />

      {isUnread && <Typography variant="caption">{label.unreadCount}</Typography>}
    </ListItem>
  );
}