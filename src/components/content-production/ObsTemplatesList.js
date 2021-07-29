import React from "react";
import Link from "@docusaurus/Link";
import styles from "../../pages/content-production/obs-templates.module.css";

const ObsTemplatesList = (props) => {
  const { templates } = props;
  if (!templates || templates.length === 0)
    return <p>Error retrieving templates. Sorry!</p>;
  return (
    <div>
      {templates.obsTemplates.map((template) => {
        return (
          <div key={template.id}>
            <table>
              <tbody>
                <tr>
                  <td className={styles.templatesTableCell}>
                    <h2>{template.name}</h2>
                    <small>
                      Published: {template.date}
                      <br />
                      MD5: <code>{template.md5}</code>
                    </small>
                    <p />
                    <div className={styles.buttons}>
                      <Link
                        className="button button--secondary button--lg"
                        to={
                          "https://raw.githubusercontent.com/valoresports/public-obs-templates/main/files/" +
                          template.valorContentType +
                          "/" +
                          template.id +
                          ".zip"
                        }
                      >
                        Download .zip file
                      </Link>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
};

export default ObsTemplatesList;
