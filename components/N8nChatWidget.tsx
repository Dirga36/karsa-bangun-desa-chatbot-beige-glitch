'use client';

import React, { useEffect } from 'react';

export default function N8nChatWidget() {
  useEffect(() => {
    // Avoid double initialization
    if (typeof window === 'undefined' || (window as unknown as { __n8nChatInitialized?: boolean }).__n8nChatInitialized) {
      return;
    }

    // 1. Add CSS link if not present
    const cssId = 'n8n-chat-style';
    if (!document.getElementById(cssId)) {
      const link = document.createElement('link');
      link.id = cssId;
      link.rel = 'stylesheet';
      link.href = 'https://cdn.jsdelivr.net/npm/@n8n/chat@latest/dist/style.css';
      document.head.appendChild(link);
    }

    // 2. Load the official module and execute createChat
    let isMounted = true;
    
    // Dynamic module import in browser
    const initChat = async () => {
      try {
        // @ts-expect-error dynamic remote module
        const { createChat } = await import(/* webpackIgnore: true */ 'https://cdn.jsdelivr.net/npm/@n8n/chat@latest/dist/chat.bundle.es.js');
        
        if (isMounted && typeof createChat === 'function') {
          (window as unknown as { __n8nChatInitialized?: boolean }).__n8nChatInitialized = true;
          createChat({
            webhookUrl: 'https://n8n-ye6yn1c7bhjy.jkt6.sumopod.my.id/webhook/e339ba0f-c8c0-4de0-a6b6-98432a430566/chat',
            initialMessages: [
              'Sampurasun! 👋 Saya Asisten Digital Karsa Bangun Desa.',
              'Ada yang bisa saya bantu terkait perancangan Desa Mandiri, Master Plan Desa Wisata/Agro, atau penguatan Koperasi Desa & BUMDes hari ini?',
            ],
            i18n: {
              en: {
                title: 'Karsa Bangun Desa',
                subtitle: 'Pendamping Digital Desa Mandiri',
                footer: 'Pendampingan Berbasis Bukti & Kearifan Lokal',
                getStarted: 'Mulai Percakapan',
                inputPlaceholder: 'Tulis pertanyaan Anda seputar desa...',
              },
            },
            style: {
              primaryColor: '#166534',
            },
          });
        }
      } catch (err) {
        console.warn('Chatbot n8n dynamic load note:', err);
      }
    };

    initChat();

    return () => {
      isMounted = false;
    };
  }, []);

  return null;
}
