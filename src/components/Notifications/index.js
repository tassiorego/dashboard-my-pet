import React, { useState, useEffect, useCallback, useRef } from 'react';
import { MdNotifications } from 'react-icons/md';

import {
  Container,
  Badge,
  NotificationList,
  Scroll,
  Notification,
} from './styles';

export default function Notifications() {
  const [visible, setVisible] = useState(false);
  const refNotification = useRef(null);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  const handleClickOutSide = useCallback((e) => {
    if (refNotification.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setVisible(false);
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutSide);
    return () => {
      document.removeEventListener('mousedown', handleClickOutSide);
    };
  }, [handleClickOutSide]);

  return (
    <Container>
      <Badge hasUnread onClick={handleToggleVisible}>
        <MdNotifications color="#fff" size={25} />
      </Badge>
      <NotificationList ref={refNotification} visible={visible}>
        <Scroll>
          <Notification unread>
            <p>Todos os ingressos do 1º Lote (Pista) foram vendidos</p>
            <time>há 1 hora</time>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification>
            <p>Você recebeu a confirmação de novas vendas</p>
            <time>há 2 dias</time>
          </Notification>
          <Notification>
            <p>
              Você tem 15 dias para testar as novas ferramentas de notificações.
              Aproveite!
            </p>
            <time>há 2 dias</time>
            {/* <button type="button">Marcar como lida</button> */}
          </Notification>
        </Scroll>
      </NotificationList>
    </Container>
  );
}
