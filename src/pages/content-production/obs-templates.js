import React, { useEffect, useState } from "react";
import ObsTemplatesList from "../../components/content-production/ObsTemplatesList";
import ObsTemplatesListLoading from "../../components/content-production/ObsTemplatesListLoading";
import Layout from "@theme/Layout";
import styles from "./obs-templates.module.css";

function ObsTemplates() {
  const TemplatesListLoading = ObsTemplatesListLoading(ObsTemplatesList);
  const [appState, setAppState] = useState({
    loading: false,
    templates: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const templateList = `https://raw.githubusercontent.com/valoresports/public-obs-templates/main/obsTemplates.json`;
    fetch(templateList)
      .then((res) => res.json())
      .then((templates) => {
        setAppState({ loading: false, templates: templates });
      });
  }, [setAppState]);

  return (
    <Layout title="OBS Templates">
      <div className={styles.templatesTopContainer}>
        <div className={styles.templatesInnerContainer}>
          <h1>OBS Templates</h1>
          <TemplatesListLoading
            isLoading={appState.loading}
            templates={appState.templates}
          />
        </div>
      </div>
    </Layout>
  );
}

export default ObsTemplates;
