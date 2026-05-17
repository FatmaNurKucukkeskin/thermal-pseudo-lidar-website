import "./App.css";

import thermal from "./assets/thermal.png";
import rgb from "./assets/rgb.png";
import evaluation from "./assets/evaluation.png";
import front from "./assets/front.png";
import perspective from "./assets/perspective.png";
import output from "./assets/output.jpg";
import pointpillars from "./assets/pointpillars.png";
import aybu from "./assets/aybu.png";

export default function App() {
  return (
    <div className="page">
      <header className="hero">
        <img src={aybu} className="universityLogo" alt="AYBU Logo" />

        <div className="universityBlock">
          <p className="universityName">
            ANKARA YILDIRIM BEYAZIT UNIVERSITY
          </p>

          <p className="department">
            Department of Computer Engineering
          </p>

          <p className="supervisor">
            Supervisor: Doç. Dr. Osman Serdar GEDİK
          </p>

          <div className="students">
            <p>Dudu KABAKÇI</p>
            <p>Dilek Miraç ÇOLAK</p>
            <p>Fatma Nur KÜÇÜKKESKİN</p>
          </div>
        </div>

        <p className="label">CENG GRADUATION PROJECT</p>

        <h1>
          Thermal Image Based Pseudo-LiDAR Generation for
          3D Object Detection
        </h1>

        <p className="heroText">
          This project presents a thermal-based 3D perception pipeline for
          low-light autonomous driving scenarios. Thermal images are processed
          to estimate depth, generate pseudo-LiDAR point clouds, and perform
          preliminary 3D object detection using the PointPillars framework.
        </p>
      </header>

      <section className="cards">

        <div className="card">
          <h3>Thermal Depth Estimation</h3>

          <p>
            Thermal images are converted into dense depth maps using a
            monocular depth estimation model.
          </p>
        </div>

        <div className="card">
          <h3>Pseudo-LiDAR Generation</h3>

          <p>
            Predicted depth maps are transformed into 3D point clouds in
            KITTI-compatible format.
          </p>
        </div>

        <div className="card">
          <h3>3D Object Detection</h3>

          <p>
            The generated pseudo-LiDAR outputs are integrated into
            PointPillars for preliminary detection experiments.
          </p>
        </div>

      </section>

      <section className="section">

        <p className="label">OBJECTIVES AND BENEFITS</p>

        <h2>Project Goals and Advantages</h2>

        <div className="objectiveGrid">

          <div className="objectiveBox">

            <h3>Objectives</h3>

            <ul>
              <li>Generate pseudo-LiDAR from thermal images</li>
              <li>Improve low-light 3D perception</li>
              <li>Enable LiDAR-free perception pipeline</li>
              <li>Integrate pseudo-LiDAR into PointPillars</li>
            </ul>

          </div>

          <div className="objectiveBox">

            <h3>Benefits</h3>

            <ul>
              <li>Lower hardware cost</li>
              <li>Better night-time robustness</li>
              <li>Thermal-based autonomous perception</li>
              <li>Cost-effective 3D scene understanding</li>
            </ul>

          </div>

        </div>

      </section>

      <section className="section">

        <p className="label">METHODOLOGY</p>

        <h2>System Pipeline</h2>

        <div className="steps">

          <div className="step">
            <strong>01</strong>
            <p>ViViD Dataset</p>
          </div>

          <div className="step">
            <strong>02</strong>
            <p>ThermalMonoDepth</p>
          </div>

          <div className="step">
            <strong>03</strong>
            <p>Pseudo-LiDAR</p>
          </div>

          <div className="step">
            <strong>04</strong>
            <p>Real vs Pseudo Comparison</p>
          </div>

          <div className="step">
            <strong>05</strong>
            <p>PointPillars</p>
          </div>

        </div>

      </section>

      <section className="section">

        <p className="label">SYSTEM ARCHITECTURE</p>

        <h2>Overall Project Flow</h2>

        <div className="architectureFlow">

          <div className="architectureStep">
            ViViD Dataset
          </div>

          <div className="arrow">↓</div>

          <div className="architectureStep">
            Thermal Image
          </div>

          <div className="arrow">↓</div>

          <div className="architectureStep">
            ThermalMonoDepth
          </div>

          <div className="arrow">↓</div>

          <div className="architectureStep">
            Depth Map
          </div>

          <div className="arrow">↓</div>

          <div className="architectureStep">
            Pseudo-LiDAR
          </div>

          <div className="arrow">↓</div>

          <div className="architectureStep">
            PointPillars
          </div>

          <div className="arrow">↓</div>

          <div className="architectureStep highlightStep">
            3D Object Detection
          </div>

        </div>

      </section>

      <section className="section">

        <p className="label">PROJECT OUTPUTS</p>

        <h2>Visual Results and Explanations</h2>

        <ResultBlock
          image={rgb}
          title="ViViD Dataset — RGB Reference Image"
          subtitle="Scene reference for visual comparison"
          text="The RGB image is used as a visual reference to better understand the scene structure. The ViViD dataset provides synchronized RGB, thermal, and LiDAR data for low-light autonomous driving research."
        />

        <ResultBlock
          image={thermal}
          title="Thermal Input Image"
          subtitle="Input data from low-light thermal scenes"
          text="Thermal images are used as the main input source because they can capture scene information in night-time and low-visibility conditions. This makes them suitable for autonomous driving perception where RGB cameras may fail."
        />

        <ResultBlock
          image={output}
          title="ThermalMonoDepth Output"
          subtitle="Dense depth estimation from thermal input"
          text="The thermal image is processed by the ThermalMonoDepth model to produce a dense depth map. This output represents the estimated distance information of the scene and forms the basis for pseudo-LiDAR generation."
        />

        <ResultBlock
          image={evaluation}
          title="Evaluation Pipeline"
          subtitle="Depth estimation performance metrics"
          text="The evaluation table summarizes the depth estimation performance using common metrics such as Abs Rel, Sq Rel, RMSE, RMSE(log), and accuracy thresholds. These metrics help quantify the quality of the generated depth maps."
        />

        <ResultBlock
          image={front}
          title="Pseudo-LiDAR Generation"
          subtitle="Front-view point cloud representation"
          text="Predicted depth maps are converted into pseudo-LiDAR point clouds in KITTI-compatible format. This representation enables the use of LiDAR-based 3D object detection frameworks."
        />

        <ResultBlock
          image={perspective}
          title="Real vs Pseudo-LiDAR Comparison"
          subtitle="Spatial comparison of generated and real point clouds"
          text="The generated pseudo-LiDAR point cloud is compared with real LiDAR data in order to evaluate the consistency of scene geometry and spatial structure. Although not identical to real LiDAR, the generated point cloud preserves meaningful 3D information."
        />

        <ResultBlock
          image={pointpillars}
          title="PointPillars BEV Detection"
          subtitle="Inference on pseudo-LiDAR point clouds"
          text="PointPillars inference was successfully performed using pseudo-LiDAR outputs generated from thermal images in the ViViD dataset. The BEV visualization shows preliminary 3D object detections with low confidence scores. Since the ViViD dataset does not contain ground-truth label files, quantitative evaluation metrics such as mAP or AP could not be computed. Therefore, the current analysis is limited to qualitative evaluation of the generated detections."
        />

        

      </section>

      <section className="textGrid">

        <div className="box">
          <h3>Results</h3>

          <p>
            Thermal images were successfully transformed into depth maps and
            pseudo-LiDAR point clouds. The generated point clouds preserved the
            overall scene geometry and spatial structure.
          </p>
        </div>

        <div className="box">
          <h3>Conclusion</h3>

          <p>
            This project demonstrated the feasibility of generating
            pseudo-LiDAR point clouds from thermal images for low-light
            autonomous driving applications.
          </p>
        </div>

        <div className="box">
          <h3>Challenges</h3>

          <p>
            The main challenges included limited thermal depth labels,
            dataset format inconsistencies, pseudo-LiDAR conversion
            difficulties, and PointPillars integration issues.
          </p>
        </div>

        <div className="box">
          <h3>Future Works</h3>

          <p>
            Future work will focus on improving pseudo-LiDAR quality,
            training the model with more data, obtaining labeled thermal
            datasets, and optimizing the pipeline for real-time applications.
          </p>
        </div>

      </section>

      <section className="referencesSection">

        <p className="label">TECHNOLOGIES AND WORKFLOW</p>

        <h2>
          Frameworks, Models and Datasets Used in the Project
        </h2>

        <div className="referencesGrid">

          <ReferenceCard
            title="ViViD Dataset"
            text="Thermal, RGB, and LiDAR dataset used for low-light autonomous driving experiments and qualitative evaluation."
            link="https://drive.google.com/open?id=10b7ujCNMQii-XUKAX44In0TJNdACUPcc"
            linkText="Official Dataset Page"
          />

          <ReferenceCard
            title="ThermalMonoDepth"
            text="Monocular thermal depth estimation framework used to generate dense depth maps from thermal images."
            link="https://share.google/mHBhmqUjybiZSKK7u"
            linkText="Official Repository"
          />

          <ReferenceCard
            title="ThermalMonoDepth Model and Data"
            text="Post-processed dataset and pre-trained model resources used for thermal depth estimation experiments."
            link="https://drive.google.com/drive/folders/1b5q6oP6h5iWZe92c6lrawLrzd4ksygs3?usp=sharing"
            linkText="Pre-trained Model"
          />

          <ReferenceCard
            title="Pseudo-LiDAR Generation"
            text="Predicted depth maps were converted into pseudo-LiDAR point clouds for 3D scene representation and KITTI-compatible processing."
            link="https://drive.google.com/drive/folders/1Y9ClXaGIhMjBpVls2dQKbZrsDKM2Kzsg?usp=sharing"
            linkText="Post-processed Dataset"
          />

          <ReferenceCard
            title="OpenPCDet"
            text="Open-source LiDAR-based 3D object detection toolbox used for model integration and inference experiments."
            link="https://github.com/open-mmlab/OpenPCDet"
            linkText="Official Repository"
          />

          <ReferenceCard
            title="PointPillars"
            text="Fast point cloud-based 3D object detection architecture used for preliminary detection experiments on generated pseudo-LiDAR data."
            link="https://arxiv.org/abs/1812.05784"
            linkText="Original Paper"
          />

        </div>

      </section>

      <footer>
        © 2026 CENG Graduation Project —
        Thermal Pseudo-LiDAR for 3D Object Detection
      </footer>

    </div>
  );
}

function ResultBlock({ image, title, subtitle, text }) {
  return (
    <div className="resultBlock">

      <div className="resultImageWrapper">
        <img
          src={image}
          className="resultImage"
          alt={title}
        />
      </div>

      <div className="resultText">

        <p className="smallLabel">
          {subtitle}
        </p>

        <h3>
          {title}
        </h3>

        <p>
          {text}
        </p>

      </div>

    </div>
  );
}

function ReferenceCard({ title, text, link, linkText }) {
  return (
    <div className="referenceCard">

      <h3>
        {title}
      </h3>

      <p>
        {text}
      </p>

      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="referenceLink"
      >
        {linkText}
      </a>

    </div>
  );
}