"use client";

import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { STORY_PAGES } from '../data/story';

const styles = StyleSheet.create({
  page: {
    padding: 9, // 0.125 inch safe zone in points
    backgroundColor: '#ffffff'
  },
  frame: {
    flex: 1,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    padding: 16,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 18,
    color: '#111827'
  },
  text: {
    fontSize: 15,
    color: '#111827',
    lineHeight: 1.4
  },
  footer: {
    fontSize: 10,
    color: '#6b7280',
    textAlign: 'right',
    marginTop: 8
  },
  ribbon: {
    height: 4,
    backgroundColor: '#a78bfa',
    marginBottom: 8
  }
});

function BookDoc({ title }: { title: string }) {
  return (
    <Document title={title} author="Agentic Press" subject="Cat and Baby Goat Storybook">
      {STORY_PAGES.map((text, idx) => (
        <Page key={idx} size="A4" style={styles.page}>
          <View style={styles.frame}>
            <View style={styles.ribbon} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.text}>{text}</Text>
            <Text style={styles.footer}>Page {idx + 1} ? 0.125in safe</Text>
          </View>
        </Page>
      ))}
    </Document>
  );
}

export default function PDFDownload({ title }: { title: string }) {
  return (
    <PDFDownloadLink
      document={<BookDoc title={title} />}
      fileName="cat-and-kid-goat-storybook.pdf"
      className="button"
    >
      {({ loading }) => (loading ? 'Preparing PDF?' : 'Download 75-page PDF')}
    </PDFDownloadLink>
  );
}
