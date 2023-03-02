import { StatContainer, BaseStatBar, BaseStats } from "./Stats.styles";

const Stats = ({ statData }) => {
  const STAT_NAME_ARRAY = ["Hp", "Atk", "Def", "SpAtk", "SpDef", "Spd"];
  let statTotal = 0;
  return (
    <StatContainer>
      {statData.map((stat, index) => {
        statTotal += stat.base_stat;
        return (
          <BaseStats>
            <p style={{ width: "50px" }}>{STAT_NAME_ARRAY[index]}</p>
            <BaseStatBar
              style={{
                "--barFill": `${(200 - stat.base_stat) / 2}%`,
              }}
            >
              {stat.base_stat}
            </BaseStatBar>
          </BaseStats>
        );
      })}
    </StatContainer>
  );
};

export default Stats;
